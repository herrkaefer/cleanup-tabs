// Saves options to chrome.storage
function save_options() {
  const urlRules = document.getElementById('urlRules').value
                   .trim()
                   .split('\n')
                   .map(x => x.trim())
                   .filter(Boolean);
  chrome.storage.sync.set({urlRules}, function() {
    restore_options();
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
}

// Restores the options stored in chrome.storage
function restore_options() {
  chrome.storage.sync.get('urlRules', function(data) {
    document.getElementById('urlRules').value = data.urlRules.join("\n");
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
