Create Database GoCook
go
Use GoCook
go

Create Table Usuario (
	cd_Usuario int not null,
	nm_Usuario varchar(50),
	nm_Email varchar(50),
	ds_Senha varchar(50))
go

Create Table Receita (
	cd_Receita int not null,
	nm_Receita varchar(30),
	qt_TempoPreparo int,
	ds_ModoPreparo varchar(max),
	qt_PessoasServidas int,
	cd_Usuario int)
go

Create Table Ingredientes (
	cd_Ingrediente int not null,
	cd_Receita int not null,
	nm_Ingrediente varchar(40),
	qt_Ingrediente int)
go


Alter Table Usuario
	Add Constraint PK_Usuario Primary Key (cd_Usuario)
go

Alter Table Receita
	Add Constraint PK_Receita Primary Key (cd_Receita)
go

Alter Table Ingredientes
	Add Constraint PK_Ingredientes Primary Key (cd_Ingrediente,cd_Receita)
go

Alter Table Receita
	Add Constraint FK_Receita Foreign Key (cd_Usuario)
	References Usuario
go

Alter Table Ingredientes
	Add Constraint FK_Ingredientes Foreign Key (cd_Receita)
	References Receita
go
