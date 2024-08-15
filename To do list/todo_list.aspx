﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="todo_list.aspx.cs" Inherits="WebsiteForBaby.To_do_list.todo_list" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/To do list/todo_list.css" rel="stylesheet" type="text/css" />
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>

    <!-- Main Content -->
    <div class="todoList">
        <div class="cover-img">
            <div class="cover-inner">
                <h3>Vacation</h3>
            </div>
        </div>
        <div class="content">
            <form class="add" runat="server">
                <input type="text" name="add" placeholder="Add item..." />
                <div class="input-buttons">
                    <a href="#" class="add-todo" aria-label="Add new to-do item">
                        <i class="fas fa-plus add"></i>
                    </a>
                </div>
            </form>
            <ul class="todos">
                <li>
                    <input type="checkbox" id="todo_1" />
                    <label for="todo_1">
                        <span class="check"></span>Buy Flight Tickets
                    </label>
                    <i class="far fa-trash-alt delete" aria-label="Delete item"></i>
                </li>
                <li>
                    <input type="checkbox" id="todo_2" />
                    <label for="todo_2">
                        <span class="check"></span>Find AirBnB
                    </label>
                    <i class="far fa-trash-alt delete" aria-label="Delete item"></i>
                </li>
                <li>
                    <input type="checkbox" id="todo_3" />
                    <label for="todo_3">
                        <span class="check"></span> Look up things to do
                    </label>
                    <i class="far fa-trash-alt delete" aria-label="Delete item"></i>
                </li>
                <li>
                    <input type="checkbox" id="todo_4" />
                    <label for="todo_4">
                        <span class="check"></span> Passport
                    </label>
                    <i class="far fa-trash-alt delete" aria-label="Delete item"></i>
                </li>
            </ul>
        </div>
    </div>



    




    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <!-- Include Custom JavaScript -->
    <script src="/To do list/todo_list.js"></script>

</body>
</html>
