// Funktion zum Hinzufügen von Report-Links
function addReportLink(appName, url, username, available = true,newLink = false) {
    // Icon-Mapping für verschiedene Apps
    const icons = {
        'Instagram': '📷',
        'X': 'X',
  
        // Füge mehr hinzu, falls nötig
    };

    // Standard-Icon, falls App nicht bekannt
    const icon = icons[appName] || '📱';

    // HTML für den Link generieren
    const linkHtml = `
        <div class="link-container ${available ? '' : 'removed'}">
            <a class="btn" href="${url}" target="_blank" onclick="showCheckmark(this); return false;">
              <div class="left">
                <div class="icon">${icon}</div>
                <div>
                  <div class="label">${appName}</div>
                  <div class="value">${username}</div>
                </div>
              </div>
              <div class="arrow">›</div>
            </a>
            <span class="checkmark" style="display:none;">✔️</span>
            ${available ? '' : '<div class="removed-text">REMOVED</div>'}
        </div>
    ${newLink ? ' <hr class="blue-line">' : ''}
      

    `;
     

    // Link zur .links-Div hinzufügen
    const linksContainer = document.getElementById('links');
    if (linksContainer) {
        linksContainer.innerHTML += linkHtml;
    }
}

// Funktion zum Anzeigen des Häkchens und Öffnen des Links
function showCheckmark(el) {
    el.nextSibling.style.display = 'inline';
    window.open(el.href, '_blank');
}