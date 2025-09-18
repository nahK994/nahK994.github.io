pipeline {
    agent any
    stages {
        stage('Start') {
            steps {
                echo "Pipeline execution started...."
            }
        }
        stage('checkout') {
            steps {
                sh '''
                    git branch: 'dev',
                    url: 'https://github.com/nahK994/nahK994.github.io.git',
                    credentialsId: 'github-token-nahK994'
                '''
            }
        }
        stage('merge-to-main') {
            steps {
                sh '''
                    git checkout main
                    touch test.sh
                    echo "Hello World!!" >> test.sh
                    echo test.sh
                    git push origin main
                '''
            }
        }
        stage('completed') {
            steps {
                echo "Pipeline execution completed.... YaHooooooo"
            }
        }
    }
}
