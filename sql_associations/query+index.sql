SELECT groups.id, group_name
FROM users 
INNER JOIN user_group_memberships
ON user_id=users.id
INNER JOIN groups
ON groups.id=group_id
WHERE email = '';