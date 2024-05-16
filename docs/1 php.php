<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
  $arr=['name'=>'aa','price'=10];
  $html="<table border='1'>
    <tr>
      <td>name</td>
      <td>price</td>
    </tr>
    <tr>
      <td>{$arr['name'}</td>
      <td>{$arr['price'}</td>
    </tr>
  </table>
  ";
  echo $html;
?>
</body>
</html>