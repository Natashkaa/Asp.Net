﻿using ShopAdoDAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dz_WebApi.Controllers.MVC
{
    public class GoodController : Controller
    {
        // GET: Good
        public ActionResult ShowGoods()
        {
            return View();
        }

        // GET: Good/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Good/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Good/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Good/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Good/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Good/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Good/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }



        #region other
        public ActionResult GoodCard(int id = 1)
        {
            return View();
        }
        #endregion
    }
}
