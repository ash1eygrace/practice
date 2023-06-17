<?php

$employee = new stdClass();
$employee->name = "John";
$employee->age = 30;
$employee->department = new stdClass();
$employee->department->name = "Marketing";
$employee->department->location = "San Francisco";

var_dump($employee);

?> 