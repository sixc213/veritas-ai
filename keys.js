<script>
function generateKey() {
  return 'vts_' + Math.random().toString(36).substring(2, 15);
}

function saveUser(email, website, key) {
  const users = JSON.parse(localStorage.getItem('veritasUsers') || '[]');
  users.push({ email, website, key, blocked: 0 });
  localStorage.setItem('veritasUsers', JSON.stringify(users));
}

function getUserByKey(key) {
  const users = JSON.parse(localStorage.getItem('veritasUsers') || '[]');
  return users.find(u => u.key === key);
}
</script>
