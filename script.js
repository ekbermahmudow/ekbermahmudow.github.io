(function(){
    'use strict';

    document.addEventListener('DOMContentLoaded', function(){
        var grid = document.getElementById('projectsGrid');
        if (!grid) return;

        function detectUsername() {
            var gh = document.querySelector('a[href*="github.com/"]');
            if (gh && gh.href) {
                try {
                    var parts = gh.href.split('/').filter(Boolean);
                    return parts[parts.length-1] || 'ekbermahmudow';
                } catch(e) { return 'ekbermahmudow'; }
            }
            return 'ekbermahmudow';
        }

        var username = detectUsername();
        var endpoint = 'https://api.github.com/users/' + encodeURIComponent(username) + '/repos?sort=updated&per_page=8';

        fetch(endpoint).then(function(res){
            if (!res.ok) throw new Error('GitHub API error');
            return res.json();
        }).then(function(repos){
            if (!Array.isArray(repos) || repos.length === 0) {
                // remove loading placeholder if exists
                var ph = grid.querySelector('.projects-empty');
                if (ph) ph.textContent = 'Heç bir açıq repo tapılmadı.';
                return;
            }
            // remove only the loading placeholder so static cards stay
            var placeholder = grid.querySelector('.projects-empty');
            if (placeholder) placeholder.remove();
            var appended = [];
            repos.forEach(function(r){
                var card = document.createElement('a');
                card.className = 'repo-card';
                card.href = r.html_url;
                card.target = '_blank';
                card.rel = 'noopener noreferrer';
                card.innerHTML = '\n                    <div class="repo-top">\n                        <div class="repo-title">\n                            <div class="repo-name">' + escapeHtml(r.name) + '</div>\n                        </div>\n                        <div class="repo-badge">\n                            <span title="Stars"><i class="fas fa-star"></i> ' + (r.stargazers_count||0) + '</span>\n                        </div>\n                    </div>\n                    <div class="repo-desc">' + (r.description ? escapeHtml(r.description) : '<em>Qısa açıqlama yoxdur</em>') + '</div>\n                    <div class="repo-meta">\n                        <div>' + (r.language ? '<i class="fas fa-code"></i> ' + escapeHtml(r.language) : '') + '</div>\n                        <div><i class="fas fa-code-branch"></i> ' + (r.forks_count||0) + '</div>\n                    </div>';
                grid.appendChild(card);
                appended.push(card);
            });

            // Remove last two appended fetched repos if they make layout look bad
            if (appended.length >= 2) {
                // remove the last two elements from DOM
                var toRemove = appended.slice(-2);
                toRemove.forEach(function(el){ if (el && el.parentNode) el.parentNode.removeChild(el); });
            }

            // GSAP entrance animation if available (only animate visible repo-cards)
            if (window.gsap) {
                gsap.from(grid.querySelectorAll('.repo-card'),{y:18,opacity:0,stagger:0.12,duration:0.6,ease:'power3.out'});
            }

        }).catch(function(err){
            grid.innerHTML = '<div class="projects-empty">Layihələr yüklənərkən xəta baş verdi.</div>';
            console.error(err);
        });

        function escapeHtml(str){
            return String(str)
                .replace(/&/g,'&amp;')
                .replace(/</g,'&lt;')
                .replace(/>/g,'&gt;')
                .replace(/"/g,'&quot;')
                .replace(/'/g,'&#039;');
        }

    });
})();
