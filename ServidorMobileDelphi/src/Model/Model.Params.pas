unit Model.Params;

interface

uses
  Model.Connection;

procedure Config;

implementation

procedure Config;
begin
  Model.Connection.FDataBase := '../../db/bancoAPI.db';
  Model.Connection.FTypeConnection := SQLite;
end;

initialization
  Config;

end.
