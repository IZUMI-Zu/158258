namespace _06_csharp;

public class Car
{
    private string _make;
    private string _model;
    private string _color;
    private int _registration;

    public string Make
    {
        set => _make = value;
        get => _make;
    }

    public int Registration
    {
        get => _registration;
    }

    public string Color
    {
        set => _color = value;
        get => _color;
    }

    public string Model
    {
        set => _model = value;
        get => _model;
    }

    public Car(string make, string model, string color, int registration)
    {
        this._color = color;
        this._make = make;
        this._registration = registration;
        this._model = model;
    }

    public string Value()
    {
        string val = "Car's info:\n" + $"Make: {this._make}\nColor: {this._color}\n" +
                     $"Registration Number: {this._registration}\n"
                     + $"Model: {this._model}";
        return val;
    }

    public void SetVal(string model, string color, int registration)
    {
        if (string.IsNullOrEmpty(this._make))
        {
            this._color = color;
            this._model = model;
            this._registration = registration;
        }
    }
}