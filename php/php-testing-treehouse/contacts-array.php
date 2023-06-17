<?php
$contacts = array(
    array(
        'name' => 'Carl Johnson',
        'email' => 'c.johnson@lossantos.com'
    ),
    array(
        'name' => 'Niko Bellic',
        'email' => 'niko.bellic@libertycity.com'
    ),
    array(
        'name' => 'Tommy Vercetti',
        'email' => 't.vercetti@vicecity.com'
    ),
    array(
        'name' => 'Michael De Santa',
        'email' => 'm.de.santa@lossantos.com'
    )
);

echo "<ul>\n";
foreach($contacts as $contact){
    echo "<li>".$contact['name']." : ".$contact['email']."</li>\n";
}
echo "</ul>\n";
