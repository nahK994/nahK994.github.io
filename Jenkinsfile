pipeline {
    agent any
    stages {
        stage('Start') {
            steps {
                echo "Pipeline execution started...."
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
