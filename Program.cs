using Microsoft.Data.Sqlite;
using TodoAPI;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlite<DBConnection>("Data Source=Todos.db");

builder.Services.AddCors(options => options.AddPolicy("_origins", policy => { policy.WithOrigins("https://localhost:3000/").AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin(); })) ;
var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("_origins");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
