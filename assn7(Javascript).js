function validate()
{
    var name = document.forms["registration"]["fname"]
    var password = document.forms["registration"]["pass"]
    var cpassword = document.forms["registration"]["cpass"]
    var mail = document.forms["registration"]["email"]
    var phone = document.forms["registration"]["mob"]
    var addr = document.forms["registration"]["addr"]
    var pin = document.forms["registration"]["pin"]
    var pincode = pin.value.toString();
    var ph = phone.value.toString();
    if(name == "")
    {
        alert("Name is required.")
    }
    if(!(/^[a-zA-Z/]+\s[a-zA-Z]+$/.test(name.value)))
    {
        alert("Name should consist of only characters. Enter full name.");
    }
    if(password.value.length < 6 || password.value.length > 12 || !(/^[A-Za-z0-9]+$/.test(password.value)))
    {
        alert("Invalid password");
    }
    if(cpassword.value.length < 6 || cpassword.value.length > 12 || !(/^[a-z0-9]+$/.test(cpassword.value)))
    {
        alert("Invalid password");
    }
    if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(mail.value)))
    {
        alert("Invalid email address");
    }
    if(ph.length != 10)
    {
        alert("Invalid mobile number.");
    }
    if(!(/^[0-9a-zA-Z/,-]+\s[0-9a-zA-Z,]+$/.test(addr.value)))
    {
        alert("Please enter proper address.");
    }
    if(pincode.length != 6)
    {
        alert("Invalid pin code. Pin code should consist of only 6 digits.");
    }
}
