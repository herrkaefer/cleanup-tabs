
// Saves options to chrome.storage
function save_options() {
  var urlRules = String(document.getElementById('urlRules').value)
                 .trim()
                 .split('\n')
                 .map(x=>x.trim())
                 .filter(x=>x);
  chrome.storage.sync.set({urlRules: urlRules}, function() {
    restore_options();
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get('urlRules', function(data) {
    document.getElementById('urlRules').value = data.urlRules.join("\n");
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
