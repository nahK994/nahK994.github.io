# Use an official lightweight web server image as the base
FROM nginx:latest

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Create a directory for your custom HTML content
RUN mkdir /usr/share/nginx/html/mywebsite

# Copy your HTML file(s) into the container
# Assuming your HTML file is named 'index.html' and is in the same directory as your Dockerfile
COPY index.html /usr/share/nginx/html/mywebsite/

# You can copy other assets like CSS, JS, images as well
# For example:
# COPY css/style.css /usr/share/nginx/html/mywebsite/css/
# COPY js/script.js /usr/share/nginx/html/mywebsite/js/
# COPY images/logo.png /usr/share/nginx/html/mywebsite/images/

# Create a custom Nginx configuration to serve your content
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80 for the web server
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]