insert into helo_user (
    username, 
    email,
    password,
    profile_pic
    )VALUES(
    ${username},
    ${email},
    ${password},
    ${profilePic}  
)
returing user_id, username, password, profile_pic;