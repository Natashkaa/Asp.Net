﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopAdoWithCRUD.Models
{
    public class UserModel
    {
        [Required]
        [DataType(DataType.Text)]
        public string Login { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [HiddenInput]
        public string Url { get; set; }
    }
}