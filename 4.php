<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["imageFile"])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["imageFile"]["name"]);
    
    if (move_uploaded_file($_FILES["imageFile"]["tmp_name"], $targetFile)) {
        echo json_encode(["success" => true, "imageUrl" => $targetFile]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to upload image."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "No image file received."]);
}
?>
