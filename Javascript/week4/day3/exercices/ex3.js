const users = { user1: 18273, user2: 92833, user3: 90315 }

const userarr = Object.entries(users);
console.log(userarr);

idsMultiplayed = userarr.map(([user,id]) => [user,id*2]);
console.log(idsMultiplayed)