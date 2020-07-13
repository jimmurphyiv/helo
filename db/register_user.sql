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
returning id, username, password, email, profile_pic;