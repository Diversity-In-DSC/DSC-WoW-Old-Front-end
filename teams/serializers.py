from rest_framework import serializers, exceptions
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password


import hashlib

from teams.models import Student, Team, Project


class StudentSerializer(serializers.ModelSerializer):
    """
    Serializer for getting all the participants
    """
    class Meta:
        model = Student
        fields = ('id', 'first_name', 'last_name', 'email', 'college',
                  'phone_no', 'is_leader',)


class RegisterStudentSerializer(serializers.ModelSerializer):
    """
    Serializer for registering a new participant
    """
    class Meta:
        model = Student
        fields = ('first_name', 'last_name', 'email', 'college',
                  'phone_no', 'is_leader', 'password',)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):

        self.firstname_bytes = str.encode(validated_data['first_name'])
        self.token = hashlib.sha256(self.firstname_bytes).hexdigest()
        username = self.token + validated_data['email']

        user = Student.objects.create_user(
            email=validated_data['email'], password=validated_data['password'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], college=validated_data['college'], phone_no=validated_data['phone_no'], username=username, is_leader=validated_data['is_leader'])

        return user


class LoginStudentSerializer(serializers.Serializer):
    """
    Serializer for logging in a participant if their account is activated
    """
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
                return user
        raise serializers.ValidationError("Incorrect Credentials")


class RegisterTeamSerializer(serializers.ModelSerializer):
    """
    Serializer for registering a new teams
    """
    class Meta:
        model = Team
        fields = ('team_name', 'idea',)

    def create(self, data):
        team = Team.objects.create(
            team_name=data['team_name'], idea=data['idea'])

        return team


class TeamSerializer(serializers.ModelSerializer):
    """
    Serializer for getting teams
    """
    class Meta:
        model = Team
        fields = ('id', 'team_name', 'idea', 'token', 'students',)


class ProjectSerializer(serializers.ModelSerializer):
    """
    Serializer for getting projects
    """
    class Meta:
        model = Project
        fields = ('id', 'project_name', 'git_url', 'deploy_link', 'team', 'description',)


class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_new_password(self, value):
        validate_password(value)
        return value