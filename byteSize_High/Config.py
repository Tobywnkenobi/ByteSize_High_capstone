import os


class Config:
  PROPAGATE_EXCEPTIONS = True
  API_TITLE = 'ByteSizeHigh'
  API_VERSION = 'v1'
  OPENAPI_VERSION = '3.0.3'
  OPENAPI_URL_PREFIX = '/'
  OPENAPI_SWAGGER_UI_PATH = '/'
  OPENAPI_SWAGGER_UI_URL = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'
  SQLALCHEMY_DATABASE_URI = os.environ.get('postgres://iidgtwjt:r4RL5YkNWIUMYzigBHX3RFetMXPOKdZ4@chunee.db.elephantsql.com/iidgtwjt')
  DATABASE_URL = 'postgresql://iidgtwjt:r4RL5YkNWIUMYzigBHX3RFetMXPOKdZ4@chunee.db.elephantsql.com/iidgtwjt'


# c5a5e02f-c9b6-40b2-b47a-311d40b028a3

# API Key