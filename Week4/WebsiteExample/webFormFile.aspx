<%@ Page Language="C#" AutoEventWireup="true" CodeFile="webFormFile.aspx.cs" Inherits="webFormFile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        #rng {
            width: 880px;
            margin-top: 0px;
        }

        .formelements {
            width: 305px;
            text-align: center;
            height: 28px;
        }

        .auto-style1 {
            text-align: left;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
       
    <asp:Label ID="Label1" runat="server" Text="Enter your Name:"></asp:Label>
    <p>
        Enter your Name: <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        &nbsp;
    </p>
    <asp:Button ID="Button1" runat="server" Text="Display Name" onclick="Button1_Click"/>  
            </form>
</body>
</html>
