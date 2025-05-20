FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=materiales_db

# Copy initialization script
COPY materiales_schema.sql /docker-entrypoint-initdb.d/init.sql

# Expose MySQL port
EXPOSE 3306

# Command to run MySQL
CMD ["mysqld"] 