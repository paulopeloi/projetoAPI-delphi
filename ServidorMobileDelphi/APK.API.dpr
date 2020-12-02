program APK.API;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  Horse,
  Horse.Jhonson,
  Horse.Cors,
  Controller.Materia in 'src\Controller\Controller.Materia.pas',
  Model.Params in 'src\Model\Model.Params.pas';

begin
  THorse
    .Use(Jhonson)
    .Use(Cors);

    Controller.Materia.Registry;

    Writeln('Server is running on port 9002');

  THorse.Listen(9002);
end.
