<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SFK AGENCY</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="./src/LogoIco.ico" />
</head>
<body>
    <header>
        <ul id="mob" class="mobNav">
            <li><a class="linkMenu" href="#1">A props</a></li>
            <li><a class="linkMenu" href="#2">Services</a></li>
            <li><a class="linkMenu" href="#3">Nos réseaux</a></li>
            <li><a class="linkMenu" href="#4">Nous connecter</a></li>
        </ul>
        <nav class="nav" id="Intro">
            <svg width="97" height="39" viewBox="0 0 148 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M125.586 48.8284C125.211 48.4534 125 47.9447 125 47.4142V44.5858C125 42.804 127.154 41.9117 128.414 43.1716L140.828 55.5858C142.088 56.8457 141.196 59 139.414 59H136.586C136.055 59 135.547 58.7893 135.172 58.4142L125.586 48.8284ZM5 53C3.89543 53 3 53.8954 3 55L3 57C3 58.1046 3.89543 59 5 59L35.025 59C46.0592 58.9865 55 50.0374 55 39V37C55 25.9543 46.0457 17 35 17L27 17C25.8954 17 25 17.8954 25 19V21C25 22.1046 25.8954 23 27 23L35 23C42.732 23 49 29.268 49 37V39C49 46.732 42.732 53 35 53L5 53ZM62 44V57C62 58.1046 62.8954 59 64 59H66C67.1046 59 68 58.1046 68 57V46C68 44.8954 68.8954 44 70 44L94 44C95.1046 44 96 43.1046 96 42V38V31V27C96 25.8954 95.1046 25 94 25H70C68.8954 25 68 24.1046 68 23V20C68 18.8954 68.8954 18 70 18L105 18C106.105 18 107 17.1046 107 16V13V12V8.00001C107 6.89544 107.895 6.00001 109 6.00001L118 6.00001C118.552 6.00001 119 5.55229 119 5V5V2.00001C119 0.895444 118.105 1.28746e-05 117 1.28746e-05H107C107 1.28746e-05 107 9.99253e-06 107 6.4373e-06V6.4373e-06C107 2.88208e-06 107 0 107 0H101C101 0 101 2.88208e-06 101 6.4373e-06V6.4373e-06C101 9.99253e-06 101 1.28746e-05 101 1.28746e-05H20C20 1.28746e-05 20 1.23885e-05 20 1.21593e-05V1.21593e-05C20 1.19302e-05 20 1.14441e-05 20 1.14441e-05C8.95431 1.11273e-05 0 8.95432 0 20C0 31.0457 8.9543 40 20 40L28 40C29.1046 40 30 39.1046 30 38V36C30 34.8954 29.1046 34 28 34L20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6.00001 20 6.00001L99 6V6C100.105 6 101 6.89543 101 8V10C101 11.1046 100.105 12 99 12L64 12C62.8954 12 62 12.8954 62 14V18V25V29C62 30.1046 62.8954 31 64 31L88 31C89.1046 31 90 31.8954 90 33V36C90 37.1046 89.1046 38 88 38H64C62.8954 38 62 38.8954 62 40V42V44ZM115 12C113.895 12 113 12.8954 113 14V57C113 58.1046 113.895 59 115 59H118C118.552 59 119 58.5523 119 58V58V42.2427V27.2402V14C119 12.8954 118.105 12 117 12H115ZM128.48 25.732C127.25 27.0846 125 26.2147 125 24.3866V21.4134C125 20.9159 125.185 20.4362 125.52 20.0681L142.435 1.46188C143.178 0.64456 144.443 0.584326 145.26 1.32734L146.74 2.67269C147.557 3.4157 147.617 4.68059 146.874 5.49791L128.48 25.732Z" fill="white"/>
            </svg>
            <ul>
                <li><a href="#1">A props</a></li>
                <li><a href="#2">Services</a></li>
                <li><a href="#3">Nos réseaux</a></li>
                <li><a href="#4">Nous connecter</a></li>
            </ul>
            <button href="" id="OCIcone" class="menuIcon" onclick="showResponsiveMenu()">
                
            </button>
        </nav>

        <h1><span>SFK</span><span>AGENCE</span><span>MARKETING DIGITAL</span></h1>
        <p id="citation">Transformez vos idées en succès avec des solutions digitales sur-mesure !</p>
        <button>Nous contacter</button>
    </header>

    <section id="1">
        <div class="title">
            <div class="line"></div>
            <h2>A PROPOS</h2>
        </div>
        <div id="propsContent">
            <p id="a_propos_txt">SFK AGENCY est une agence de marketing digital spécialisée dans la création de projets clés en main. Elle accompagne ses clients à chaque étape, depuis la conception de leur identité visuelle jusqu’au développement de leur site internet, tout en gérant leur marketing et leur communication sur les réseaux sociaux.</p>
            <img id="parallax" src="./src/img/propsImg.jpg" alt="Un homme qui écrit sur un ordinateur">
        </div>
    </section>

    <section id="2">
        <div class="title">
            <div class="line"></div>
            <h2>NOS SERVICES</h2>
        </div>
        <div id="servicesContent">
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, rgba(77, 8, 112, 1) 1%, rgba(14, 13, 23, 1) 80%);">
                <svg width="142" height="142" viewBox="0 0 142 142" fill="rgb(245, 48, 255,0.2)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6454 91.5111L9.15093 123.856C8.89239 125.038 8.90125 126.263 9.17687 127.442C9.45248 128.62 9.98787 129.722 10.7439 130.667C11.5 131.612 12.4577 132.377 13.5469 132.904C14.6362 133.432 15.8295 133.709 17.0398 133.717C17.6038 133.774 18.172 133.774 18.7359 133.717L51.2776 126.222L113.758 63.9789L78.8887 29.1889L16.6454 91.5111Z" fill="#F530FF" fill-opacity="0.1"/>
                    <path d="M17.09 133.219L17.0665 133.217L17.0428 133.217C15.907 133.21 14.7871 132.949 13.7649 132.454C12.7426 131.959 11.8439 131.242 11.1344 130.355C10.4248 129.468 9.92238 128.434 9.66373 127.328C9.40531 126.223 9.39678 125.074 9.63873 123.965C9.63895 123.964 9.63917 123.963 9.63938 123.962L17.1002 91.7633L78.8893 29.8958L113.049 63.9786L51.026 125.767L18.6548 133.222C18.1344 133.273 17.6103 133.272 17.09 133.219Z" stroke="white" stroke-opacity="0.04"/>
                    <path d="M133.401 32.8178L110.129 9.54556C108.599 8.02326 106.528 7.16868 104.37 7.16868C102.212 7.16868 100.141 8.02326 98.6111 9.54556L85.6733 22.4833L120.503 57.3128L133.441 44.375C134.198 43.614 134.797 42.7112 135.205 41.7183C135.613 40.7253 135.821 39.6617 135.817 38.5882C135.814 37.5148 135.598 36.4526 135.184 35.4624C134.769 34.4722 134.163 33.5736 133.401 32.8178Z" fill="#F530FF" fill-opacity="0.1"/>
                    <path d="M133.048 33.1713L133.049 33.1728C133.765 33.8823 134.333 34.726 134.723 35.6555C135.112 36.585 135.314 37.5822 135.317 38.5899C135.321 39.5976 135.126 40.5962 134.743 41.5283C134.36 42.4605 133.797 43.308 133.086 44.0223L120.503 56.6057L86.3804 22.4833L98.9638 9.9C98.9639 9.89983 98.9641 9.89967 98.9643 9.8995C100.401 8.47074 102.344 7.66868 104.37 7.66868C106.396 7.66868 108.34 8.47077 109.776 9.89959C109.776 9.89973 109.776 9.89987 109.776 9.9L133.048 33.1713Z" stroke="white" stroke-opacity="0.04"/>
                </svg>
                    
                <p class="TitleCardServices">
                    Création d’identité visuelle
                </p>
                <ul>
                    <li>Logo et charte graphique</li>
                    <li>Palette de couleurs et typographie</li>
                    <li>Supports de communication (cartes de visite, flyers, etc.)</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, #14108A 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/Code.svg" type="">
                    
                <p class="TitleCardServices">
                    Développement de sites web
                </p>
                <ul>
                    <li>Création de sites vitrines ou e-commerce</li>
                    <li>Design UX/UI sur mesure</li>
                    <li>Hébergement et maintenance</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, #0A892E 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/Phone.svg" type="">
                    
                <p class="TitleCardServices">
                    Développement d’applications mobiles
                </p>
                <ul>
                    <li>Création d’applications mobiles sur mesure (iOS et Android)</li>
                    <li>Expérience utilisateur (UX/UI) optimisée</li>
                    <li>Maintenance et mises à jour</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, rgba(77, 8, 112, 1) 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/Cube.svg" type="">
                    
                <p class="TitleCardServices">
                    Création de vidéos CGI en 3D
                </p>
                <ul>
                    <li>Modélisation 3D et animations</li>
                    <li>Vidéos promotionnelles ou explicatives</li>
                    <li>Intégration d’effets spéciaux et rendus réalistes</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, #14108A 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/Play.svg" type="">
                    
                <p class="TitleCardServices">
                    Création de contenu UGC
                </p>
                <ul>
                    <li>Conception et production de contenu authentique généré par des utilisateurs</li>
                    <li>Vidéos, photos et témoignages pour les réseaux sociaux et campagnes publicitaires</li>
                    <li>Gestion de collaborations avec des créateurs</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, #0A892E 1%, rgba(14, 13, 23, 1) 80%);line-height: 14px;">
                <embed src="./src/Services/people.svg" type="">
                    
                <p class="TitleCardServices">
                    Mise en relation avec des logisticiens et sourceurs
                </p>
                <ul>
                    <li>Mise en relation avec des logisticiens en France pour la gestion et l’expédition des colis (les clients n’ont plus besoin de s’occuper des préparations)</li>
                    <li>Recherche et mise en relation avec des sourceurs fiables en Chine pour l’approvisionnement en produits.</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, rgba(77, 8, 112, 1) 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/chat.svg" type="">
                    
                <p class="TitleCardServices">
                    Communication digitale
                </p>
                <ul>
                    <li>Rédaction de contenu optimisé (articles, posts, newsletters)</li>
                    <li>Création de vidéos et visuels attractifs</li>
                    <li>Gestion d’influenceurs et partenariats</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, #14108A 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/megaphone.svg" type="">
                    
                <p class="TitleCardServices">
                    Marketing digital
                </p>
                <ul>
                    <li>Gestion des réseaux sociaux (création et planification de contenu, gestion des publicités)</li>
                    <li>Stratégie de marketing en ligne (SEO, SEA, campagnes publicitaires)</li>
                    <li>Création et gestion d’e-mailing</li>
                </ul>
            </div>
            <div class="ServicesCard" style="background: radial-gradient(circle at 80% 30%, #0A892E 1%, rgba(14, 13, 23, 1) 80%);">
                <embed src="./src/Services/Stats.svg" type="">
                    
                <p class="TitleCardServices">
                    Accompagnement global
                </p>
                <ul>
                    <li>Consulting pour définir la stratégie globale</li>
                    <li>Analyse des résultats et reporting</li>
                    <li>Suivi et optimisation des campagnes marketing</li>
                </ul>
            </div> 
        </div>
        
    </section>

    <section id="3">
        <div class="title">
            <div class="line"></div>
            <h2>NOS RESEAUX</h2>
        </div>
        <div id="reseauxContent">
            <p id="txtSocial">Restez connectés avec nous et découvrez nos dernières actualités, projets et conseils en marketing digital. Retrouvez-nous sur :</p>
            <div class="socialGride">

                <a target="_blank"  href="https://www.instagram.com/sfkagency/#" class="socialCard">
                    <embed class="svg" src="./src/RS/Instagram 1.svg" type="">
                    <p>www.instagram.com/sfkagency/#</p>
                </a>

                <a target="_blank"  href="https://www.tiktok.com/@sfkagency" class="socialCard">
                    <svg class="svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.6176 17.9656C41.3455 17.825 41.0806 17.6708 40.8239 17.5037C40.0775 17.0102 39.3931 16.4288 38.7856 15.7719C37.2655 14.0326 36.6977 12.2681 36.4886 11.0327H36.497C36.3223 10.0072 36.3946 9.34375 36.4055 9.34375H29.4818V36.1163C29.4818 36.4757 29.4818 36.831 29.4667 37.1821C29.4667 37.2257 29.4625 37.266 29.46 37.3131C29.46 37.3324 29.46 37.3525 29.4558 37.3727V37.3878C29.3828 38.3484 29.0749 39.2764 28.5591 40.09C28.0433 40.9037 27.3355 41.5781 26.4978 42.054C25.6249 42.5506 24.6375 42.8112 23.6331 42.8098C20.4073 42.8098 17.7929 40.1795 17.7929 36.9309C17.7929 33.6824 20.4073 31.052 23.6331 31.052C24.2438 31.0515 24.8507 31.1476 25.4312 31.3367L25.4396 24.2871C23.6771 24.0594 21.8865 24.1995 20.1809 24.6985C18.4752 25.1975 16.8914 26.0445 15.5295 27.1862C14.3361 28.2231 13.3329 29.4603 12.5648 30.8421C12.2726 31.346 11.1699 33.3708 11.0363 36.6572C10.9523 38.5224 11.5125 40.4549 11.7796 41.2536V41.2704C11.9476 41.7407 12.5984 43.3457 13.6592 44.6987C14.5145 45.784 15.525 46.7373 16.6582 47.5281V47.5113L16.675 47.5281C20.0269 49.8057 23.7432 49.6563 23.7432 49.6563C24.3865 49.6302 26.5415 49.6563 28.9888 48.4964C31.7032 47.2106 33.2485 45.2949 33.2485 45.2949C34.2357 44.1503 35.0207 42.8458 35.5698 41.4375C36.1964 39.7906 36.4055 37.8153 36.4055 37.0258V22.8224C36.4895 22.8728 37.6081 23.6127 37.6081 23.6127C37.6081 23.6127 39.2198 24.6457 41.7343 25.3184C43.5383 25.7971 45.9688 25.8979 45.9688 25.8979V19.0246C45.1172 19.117 43.3879 18.8483 41.6176 17.9656Z" fill="white"/>
                    </svg>
                    <p>www.tiktok.com/@sfkagency</p>
                </a>

                <a target="_blank"  href="https://x.com/sfkagency" class="socialCard">
                    <svg class="svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.8346 12H49.4257L34.9539 26.9485L51.8616 47.2264H38.5933L28.2051 34.9036L16.3124 47.2264H9.72129L25.0528 31.238L8.86157 12H22.4594L31.8446 23.2568L42.8346 12ZM40.5277 43.7167H44.1815L20.5393 15.3797H16.6133L40.5277 43.7167Z" fill="white"/>
                    </svg>
                    <p>www.x.com/sfkagency</p>
                </a>

                <a target="_blank"  href="https://www.instagram.com/sfkagency/#" class="socialCard">
                    <svg class="svg"  width="60" height="60" viewBox="0 0 60 60" fill="#01DD3F" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.7581 14.2513C42.8296 12.2616 40.533 10.6843 38.0021 9.61103C35.4713 8.53781 32.7568 7.99021 30.0168 8.00013C18.5357 8.00013 9.17878 17.5623 9.16826 29.3013C9.16826 33.0611 10.1305 36.7188 11.9472 39.9572L9 51.0001L20.0526 48.0385C23.1103 49.7395 26.5358 50.631 30.0168 50.6319H30.0273C41.5112 50.6319 50.8654 41.0698 50.8759 29.3201C50.8785 26.5198 50.3391 23.7467 49.2887 21.1605C48.2382 18.5743 46.7002 16.2261 44.7581 14.2513ZM30.0168 47.0253C26.9119 47.0264 23.864 46.1723 21.1937 44.5528L20.5627 44.1658L14.0058 45.9234L15.7567 39.3848L15.3466 38.7102C13.6109 35.8892 12.6929 32.6231 12.6991 29.2905C12.6991 19.5456 20.4733 11.596 30.0273 11.596C32.3034 11.5918 34.5578 12.0482 36.6606 12.9389C38.7633 13.8296 40.6727 15.137 42.2788 16.7856C43.8905 18.4278 45.1682 20.3799 46.0382 22.5294C46.9082 24.6789 47.3533 26.9831 47.3477 29.3093C47.3372 39.0891 39.563 47.0253 30.0168 47.0253ZM39.5209 33.7652C39.003 33.4991 36.4449 32.2118 35.9638 32.0291C35.4853 31.8544 35.1356 31.763 34.7939 32.2951C34.4442 32.8246 33.4451 34.0313 33.1454 34.3779C32.8457 34.7354 32.5355 34.7757 32.0149 34.5123C31.497 34.2436 29.817 33.6846 27.8294 31.8651C26.2783 30.4542 25.2398 28.7073 24.9296 28.1779C24.6299 27.6458 24.9006 27.3609 25.1609 27.0948C25.3897 26.8583 25.6789 26.4713 25.9391 26.1649C26.202 25.8586 26.2888 25.6328 26.4597 25.2781C26.6306 24.9179 26.5491 24.6116 26.4203 24.3455C26.2888 24.0794 25.2503 21.4538 24.8113 20.3949C24.3906 19.3494 23.9621 19.4946 23.6413 19.4811C23.3416 19.4623 22.9919 19.4623 22.6423 19.4623C22.3782 19.469 22.1184 19.5315 21.879 19.6457C21.6397 19.7599 21.4261 19.9235 21.2515 20.1261C20.773 20.6583 19.4348 21.9456 19.4348 24.5713C19.4348 27.1969 21.3014 29.7205 21.5644 30.0779C21.822 30.4354 25.2293 35.8077 30.4585 38.1189C31.6942 38.6699 32.6669 38.9951 33.4267 39.2423C34.6756 39.6508 35.8034 39.589 36.7026 39.4573C37.7016 39.3014 39.7812 38.1673 40.2203 36.923C40.6514 35.676 40.6514 34.6118 40.52 34.3887C40.3912 34.1629 40.0415 34.0313 39.5209 33.7652Z" fill="white"/>
                    </svg>
                    <p>www.instagram.com/sfkagency/#</p>
                </a>
            </div>
        </div>
    </section>

    <section id="ContactForm">
        <div class="title">
            <div class="line"></div>
            <h2>NOUS CONTACTER</h2>
        </div>
        <p>Pour toute demande, n'hésitez pas à nous contacter via le formulaire ci-dessous ou en nous envoyant un mail à <a href="mailto:contact@sfkagency.com">contact@sfkagency.com</a></p>
        <form id="FormContent" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="2bdfafb7-fe5a-405d-9469-d2db9c2eecbf">
            <div id="f_l_name">
                <div class="input-struct">
                    <small>Nom</small>
                    <input type="text" name="nom" required placeholder="Entrez votre nom" id="">
                </div>
                <div class="input-struct">
                    <small>Prénom</small>
                    <input type="text" name="prenom" required placeholder="Entrez votre prénom" id="">
                </div>
            </div>
            <div class="input-struct">
                <small>Adresse mail</small>
                <input class="mail" type="email" name="email" required placeholder="Entrez votre adresse mail" id="">
            </div>
            <div class="input-struct">
                <small>Message</small>
                <textarea class="message" name="message" required placeholder="Évrivez votre message ..." id=""></textarea>
            </div>
            <input type="hidden" name="redirect" value="https://web3forms.com/success">
            <button type="submit">Envoyer
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.125 0.147321C24.4197 0.361607 24.5402 0.647321 24.4866 1.00446L21.0581 21.5759C21.0134 21.8348 20.8706 22.0357 20.6295 22.1786C20.5045 22.25 20.3661 22.2857 20.2143 22.2857C20.1161 22.2857 20.009 22.2634 19.8929 22.2188L13.8259 19.7411L10.5848 23.692C10.4241 23.8973 10.2054 24 9.92859 24C9.81252 24 9.71431 23.9821 9.63395 23.9464C9.46431 23.8839 9.32815 23.779 9.22547 23.6317C9.12279 23.4844 9.07145 23.3214 9.07145 23.1429V18.4688L20.6429 4.28571L6.32592 16.6741L1.03574 14.5045C0.70538 14.3795 0.526809 14.1339 0.500023 13.7679C0.482166 13.4107 0.625023 13.1473 0.928595 12.9777L23.2143 0.120536C23.3482 0.0401786 23.4911 0 23.6429 0C23.8215 0 23.9822 0.0491071 24.125 0.147321Z" fill="white"/>
                </svg>                    
            </button>
        </form>
    </section>
      
    <footer>
        <div class="Foorter_wrap">
            <svg width="90"  viewBox="0 0 148 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M125.586 48.8284C125.211 48.4534 125 47.9447 125 47.4142V44.5858C125 42.804 127.154 41.9117 128.414 43.1716L140.828 55.5858C142.088 56.8457 141.196 59 139.414 59H136.586C136.055 59 135.547 58.7893 135.172 58.4142L125.586 48.8284ZM5 53C3.89543 53 3 53.8954 3 55L3 57C3 58.1046 3.89543 59 5 59L35.025 59C46.0592 58.9865 55 50.0374 55 39V37C55 25.9543 46.0457 17 35 17L27 17C25.8954 17 25 17.8954 25 19V21C25 22.1046 25.8954 23 27 23L35 23C42.732 23 49 29.268 49 37V39C49 46.732 42.732 53 35 53L5 53ZM62 44V57C62 58.1046 62.8954 59 64 59H66C67.1046 59 68 58.1046 68 57V46C68 44.8954 68.8954 44 70 44L94 44C95.1046 44 96 43.1046 96 42V38V31V27C96 25.8954 95.1046 25 94 25H70C68.8954 25 68 24.1046 68 23V20C68 18.8954 68.8954 18 70 18L105 18C106.105 18 107 17.1046 107 16V13V12V8.00001C107 6.89544 107.895 6.00001 109 6.00001L118 6.00001C118.552 6.00001 119 5.55229 119 5V5V2.00001C119 0.895444 118.105 1.28746e-05 117 1.28746e-05H107C107 1.28746e-05 107 9.99253e-06 107 6.4373e-06V6.4373e-06C107 2.88208e-06 107 0 107 0H101C101 0 101 2.88208e-06 101 6.4373e-06V6.4373e-06C101 9.99253e-06 101 1.28746e-05 101 1.28746e-05H20C20 1.28746e-05 20 1.23885e-05 20 1.21593e-05V1.21593e-05C20 1.19302e-05 20 1.14441e-05 20 1.14441e-05C8.95431 1.11273e-05 0 8.95432 0 20C0 31.0457 8.9543 40 20 40L28 40C29.1046 40 30 39.1046 30 38V36C30 34.8954 29.1046 34 28 34L20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6.00001 20 6.00001L99 6V6C100.105 6 101 6.89543 101 8V10C101 11.1046 100.105 12 99 12L64 12C62.8954 12 62 12.8954 62 14V18V25V29C62 30.1046 62.8954 31 64 31L88 31C89.1046 31 90 31.8954 90 33V36C90 37.1046 89.1046 38 88 38H64C62.8954 38 62 38.8954 62 40V42V44ZM115 12C113.895 12 113 12.8954 113 14V57C113 58.1046 113.895 59 115 59H118C118.552 59 119 58.5523 119 58V58V42.2427V27.2402V14C119 12.8954 118.105 12 117 12H115ZM128.48 25.732C127.25 27.0846 125 26.2147 125 24.3866V21.4134C125 20.9159 125.185 20.4362 125.52 20.0681L142.435 1.46188C143.178 0.64456 144.443 0.584326 145.26 1.32734L146.74 2.67269C147.557 3.4157 147.617 4.68059 146.874 5.49791L128.48 25.732Z" fill="white"/>
            </svg>
            <ul id="float">
                <li>A props</li>
                <li>Services</li>
                <li>Nos réseaux</li>
                <li>Nous connecter</li>
            </ul>
            <ul>
                <li>
                    <a target="_blank" href="https://www.instagram.com/sfkagency/#">
                    <svg width="40" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.001 25.1818C41.0757 25.1818 40.3321 25.2077 38.0049 25.3136C35.6822 25.4199 34.0968 25.7877 32.7096 26.3272C31.2746 26.8845 30.0574 27.6299 28.8447 28.8431C27.6311 30.0559 26.8857 31.2731 26.3266 32.7077C25.7857 34.0954 25.4175 35.6813 25.313 38.0031C25.2089 40.3304 25.1816 41.0745 25.1816 46.9999C25.1816 52.9254 25.208 53.6668 25.3135 55.994C25.4203 58.3168 25.788 59.9022 26.3271 61.2895C26.8848 62.7245 27.6302 63.9418 28.8433 65.1545C30.0556 66.3681 31.2728 67.1154 32.7069 67.6727C34.095 68.2122 35.6809 68.5799 38.0031 68.6863C40.3303 68.7922 41.0734 68.8181 46.9983 68.8181C52.924 68.8181 53.6653 68.7922 55.9925 68.6863C58.3152 68.5799 59.9024 68.2122 61.2905 67.6727C62.725 67.1154 63.9405 66.3681 65.1527 65.1545C66.3663 63.9418 67.1117 62.7245 67.6708 61.2899C68.2072 59.9022 68.5753 58.3163 68.6844 55.9945C68.789 53.6672 68.8162 52.9254 68.8162 46.9999C68.8162 41.0745 68.789 40.3309 68.6844 38.0036C68.5753 35.6809 68.2072 34.0954 67.6708 32.7081C67.1117 31.2731 66.3663 30.0559 65.1527 28.8431C63.9391 27.6295 62.7255 26.884 61.2892 26.3272C59.8983 25.7877 58.312 25.4199 55.9893 25.3136C53.6621 25.2077 52.9213 25.1818 46.9942 25.1818H47.001ZM45.0438 29.1136C45.6247 29.1127 46.2728 29.1136 47.001 29.1136C52.8263 29.1136 53.5167 29.1345 55.8171 29.239C57.9443 29.3363 59.0988 29.6918 59.8679 29.9904C60.886 30.3859 61.6119 30.8586 62.3751 31.6222C63.1387 32.3859 63.6114 33.1131 64.0077 34.1313C64.3064 34.8995 64.6623 36.054 64.7591 38.1813C64.8636 40.4813 64.8863 41.1722 64.8863 46.9949C64.8863 52.8177 64.8636 53.5086 64.7591 55.8086C64.6618 57.9359 64.3064 59.0904 64.0077 59.8586C63.6123 60.8768 63.1387 61.6018 62.3751 62.3649C61.6114 63.1286 60.8865 63.6013 59.8679 63.9968C59.0997 64.2968 57.9443 64.6513 55.8171 64.7486C53.5171 64.8531 52.8263 64.8759 47.001 64.8759C41.1752 64.8759 40.4848 64.8531 38.1849 64.7486C36.0577 64.6504 34.9032 64.2949 34.1336 63.9963C33.1155 63.6009 32.3882 63.1281 31.6246 62.3645C30.861 61.6009 30.3883 60.8754 29.9919 59.8568C29.6933 59.0886 29.3374 57.934 29.2406 55.8068C29.1361 53.5068 29.1152 52.8159 29.1152 46.9895C29.1152 41.1631 29.1361 40.4759 29.2406 38.1759C29.3379 36.0486 29.6933 34.894 29.9919 34.1249C30.3874 33.1068 30.861 32.3795 31.6246 31.6159C32.3882 30.8522 33.1155 30.3795 34.1336 29.9831C34.9027 29.6831 36.0577 29.3286 38.1849 29.2309C40.1975 29.1399 40.9775 29.1127 45.0438 29.1081V29.1136ZM58.647 32.7363C57.2016 32.7363 56.0289 33.9077 56.0289 35.3536C56.0289 36.799 57.2016 37.9718 58.647 37.9718C60.0924 37.9718 61.2651 36.799 61.2651 35.3536C61.2651 33.9081 60.0924 32.7354 58.647 32.7354V32.7363ZM47.001 35.7954C40.8134 35.7954 35.7968 40.8122 35.7968 46.9999C35.7968 53.1877 40.8134 58.2022 47.001 58.2022C53.1885 58.2022 58.2034 53.1877 58.2034 46.9999C58.2034 40.8122 53.1885 35.7954 47.001 35.7954ZM47.001 39.7272C51.0172 39.7272 54.2735 42.9831 54.2735 46.9999C54.2735 51.0163 51.0172 54.2727 47.001 54.2727C42.9843 54.2727 39.7285 51.0163 39.7285 46.9999C39.7285 42.9831 42.9843 39.7272 47.001 39.7272Z" fill="white"/>
                    </svg>                        
                    </a>
                </li>
                <li><a target="_blank" href="https://www.tiktok.com/@sfkagency"><img src="./src/RS/Inner Plugin Iframe.svg" width="30" type=""></a></li>
                <li><a target="_blank" href="https://x.com/sfkagency"><img src="./src/RS/Frame 25.svg" width="30" type=""></a></li>
                <li><a target="_blank" href=""><img src="./src/RS/Inner Plugin Iframe-1.svg" width="30" type=""></a></li>
            </ul>
        </div>
        <p class="creditation">© 2024 SFK AGENCY | Conçu par Evan G</p>
    </footer>

    <script src="./index.js"></script>
</body>
</html>
