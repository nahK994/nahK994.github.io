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
                git branch: 'dev',
                    url: 'https://github.com/nahK994/nahK994.github.io.git'
            }
        }
        stage('merge-to-main') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-token-nahK994-5',
                                                 usernameVariable: 'GIT_USER',
                                                 passwordVariable: 'GIT_TOKEN')]) {
                    sh '''
                        git config user.name "nahK994"
                        git config user.email "nkskl6@gmail.com"
                        git checkout main
                        git merge dev
                        git commit -m "Update resume using Jenkins pipeline"
                        git remote set-url origin https://$GIT_USER:$GIT_TOKEN@github.com/nahK994/nahK994.github.io.git
                        git push origin main
                    '''
                }
            }
        }
        stage('completed') {
            steps {
                echo "Pipeline execution completed.... YaHooooooo"
            }
        }
    }
}
