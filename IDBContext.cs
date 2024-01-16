using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TodoAPI.Modals;

namespace TodoAPI
{
    public interface IDBContext
    {
        void Initialize();
        void GetConnection();
    }

    public class DBConnection : DbContext, IDBContext
    {
        public DBConnection() { }
        public DBConnection(DbContextOptions<DBConnection> options) : base(options) { }

        public DbSet<Todo> TblTodo { get; set; }

        public void GetConnection()
        {
            throw new NotImplementedException();
        }

        public void Initialize()
        {
            throw new NotImplementedException();
        }
    }
}
