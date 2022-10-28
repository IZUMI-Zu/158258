using System.ComponentModel.DataAnnotations;

namespace lab9.Models
{
    public class Student
    {
        [Key]
        private int _ID;
        private string _Name;
        private string _Address;
        private string _Campus;

        public int ID
        {
            get => _ID;
            set =>  _ID = value;
        }

        public string Name
        {
            get => _Name;
            set => _Name = value;
        }
        
        public string Address
        {
            get => _Address;
            set => _Address = value;
        }
        
        public string Campus
        {
            get => _Campus;
            set => _Campus = value;
        }
    }
}