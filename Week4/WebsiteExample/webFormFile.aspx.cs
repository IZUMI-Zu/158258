﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class webFormFile : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //Label1.Text = TextBox1.Text + ", welcome to Visual Studio!";
    }
    protected void Button1_Click(object sender, System.EventArgs e)
    {
        Label1.Text = TextBox1.Text + ", welcome to Visual Studio!";
    }
}