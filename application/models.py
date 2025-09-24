from .database import db
from flask_security import UserMixin, RoleMixin
from flask_login import login_manager

roles_users = db.Table('roles_users',
        db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
        db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))    

class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    username = db.Column(db.String, unique=False)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    fs_uniquifier = db.Column(db.String(255), unique=True, nullable=False) 
    roles = db.relationship('Role', secondary=roles_users,backref=db.backref('users', lazy='dynamic'))

class Role(db.Model, RoleMixin):
    __tablename__ = 'role'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

'''

class Article(db.Model):
    __tablename__ = 'article'
    article_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String)
    content = db.Column(db.String)
    authors = db.relationship("User", secondary="article_authors")

class ArticleAuthors(db.Model):
    __tablename__ = 'article_authors'
    user_id = db.Column(db.Integer,   db.ForeignKey("user.id"), primary_key=True, nullable=False)
    article_id = db.Column(db.Integer,  db.ForeignKey("article.article_id"), primary_key=True, nullable=False) 

class ArticleLikes(db.Model):
    __tablename__ = 'article_likes'
    user_id = db.Column(db.Integer,   db.ForeignKey("user.id"), primary_key=True, nullable=False)
    article_id = db.Column(db.Integer,  db.ForeignKey("article.article_id"), primary_key=True, nullable=False) 
    '''
class DataStore(db.Model):
    __tablename__='Data_store'
    Email_id=db.Column(db.String,db.ForeignKey("Login_information.Email_id"),nullable=True,primary_key=True)
    Deck=db.Column(db.String,nullable=False,primary_key=True)
    Score=db.Column(db.Integer,nullable=False)
    Last_visited=db.Column(db.String,nullable=False)
    Num_cards=db.Column(db.Integer,nullable=False)

class LoginInformation(db.Model):
    __tablename__='Login_information'
    f_name=db.Column(db.String, nullable=False)
    last_name=db.Column(db.String,nullable=False)
    Email_id=db.Column(db.String,nullable=False,unique=True,primary_key=True)
    Password=db.Column(db.String,nullable=False)

class FlashcardStore(db.Model):
    __tablename__='Flashcard_store'
    Email_id=db.Column(db.String,db.ForeignKey("Login_information.Email_id"),nullable=True,primary_key=True)
    Deck_name=db.Column(db.String,nullable=False,primary_key=True)
    Question=db.Column(db.String,nullable=False,primary_key=True)
    Answer=db.Column(db.String,nullable=False)
