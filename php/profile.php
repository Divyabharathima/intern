<?php
require_once "../_config/db.php";
require_once "../_config/mongodb.php"; 
require_once "../_config/redis_connection.php"; 

// Check if the 'gmail' key exists in the $_POST array
if (isset($_POST['gmail']) && !empty($_POST['gmail'])) {
    $email = $_POST['gmail'];

    // Check if user data is in Redis
    $userDataKey = "user:$email";
    $userData = $redisClient->hgetall($userDataKey);

    if (!empty($userData)) {
        // User data found in Redis
        exit(json_encode([
            'status' => 'success',
            'status_code' => 200,
            'message' => 'User data retrieved from Redis.',
            'user_data' => $userData,
        ]));
    }

     else {
        exit(json_encode([
            'status' => 'error',
            'status_code' => 400,
            'message' => 'User details not found .',
        ]));
    }
} else {
    // 'gmail' parameter not provided
    exit(json_encode([
        'status' => 'error',
        'status_code' => 400,
        'message' => 'Email not provided.',
    ]));
}
