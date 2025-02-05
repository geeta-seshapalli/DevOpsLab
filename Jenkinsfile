pipeline {
    agent any
    environment {
        GIT_REPO = 'https://github.com/geeta-seshapalli/DevOpsLab.git' // Change this if using SSH
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                git url: "${GIT_REPO}", branch: 'main', credentialsId: 'your-credentials-id' // If using HTTPS
                // For SSH: 
                // git url: 'git@github.com:geeta-seshapalli/DevOpsLab.git', branch: 'main', credentialsId: 'geeta-seshapalli' 
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add build commands here, e.g., mvn, npm, etc.
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands here, e.g., pytest, junit, etc.
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add deployment commands here, e.g., kubectl, docker, etc.
            }
        }
    }
    post {
        success {
            echo 'Pipeline execution completed successfully.'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}

