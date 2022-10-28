using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace lab9.Models
{
    public class UniversityCampus
    {
        // ID, Name, a collection of students
        [Key]
        private int _ID;
        private string _Name;
        private List<Student> _students = new List<Student>();

        public int ID
        {
            get => _ID;
            set => _ID = value;
        }

        public string Name
        {
            get => _Name;
            set => _Name = value;
        }

        public List<Student> Students
        {
            get => _students;
            set => _students = value;
        }

        public void AddStudent(Student student)
        {
            this._students.Add(student);
        }
    }
}