using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoAPI.Modals
{
    [Table("todo")]
    public class Todo
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public required string Title { get; set; }
        [Column("status")]
        public bool Status { get; set; }

        public override string ToString()
        {
            return $"{Title} ({Id})";
        }
    }
    public class Todos
    {
        public IEnumerable<Todo> List { get; set; }
    }
}