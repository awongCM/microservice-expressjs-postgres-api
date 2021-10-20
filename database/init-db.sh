#! /bin/bash
set -e

# Microservice DB design rationale goes here - https://microservices.io/patterns/data/shared-database.html
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE shared_db_service;
  GRANT ALL PRIVILEGES ON DATABASE shared_db_service TO "admin-microservice";
EOSQL

