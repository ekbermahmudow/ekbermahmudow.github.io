<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Əkbər Mahmudov - Proqramçı & Rəqəmsal Həllər Mütəxəssisi. Şəxsi portfolio saytı.">
    <meta name="author" content="Əkbər Mahmudov">
    <title>Əkbər Mahmudov | Şəxsi Sayt</title>
    <link rel="icon" type="image/x-icon" href="https://avatars.githubusercontent.com/u/261281142?v=4">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        /* ===== RESET & GLOBAL ===== */
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            scroll-padding-top: 80px;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: #0a0a0a;
            color: #f0f0f0;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        ::selection {
            background: rgba(0, 212, 255, 0.3);
            color: #fff;
        }

        /* ===== ANIMATED BACKGROUND PARTICLES ===== */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(0, 212, 255, 0.4);
            border-radius: 50%;
            animation: floatParticle linear infinite;
        }

        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-10vh) rotate(720deg);
                opacity: 0;
            }
        }

        /* ===== PRELOADER ===== */
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0a0a0a;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .preloader.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .preloader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0, 212, 255, 0.1);
            border-top-color: #00d4ff;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* ===== NAVBAR ===== */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 212, 255, 0.1);
            transition: all 0.3s ease;
        }

        .navbar.scrolled {
            padding: 12px 50px;
            background: rgba(10, 10, 10, 0.95);
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-logo {
            font-size: 1.8rem;
            font-weight: 900;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            cursor: pointer;
            transition: transform 0.3s ease;
            user-select: none;
        }

        .nav-logo:hover {
            transform: scale(1.05);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 35px;
        }

        .nav-links a {
            text-decoration: none;
            color: #ccc;
            font-weight: 500;
            font-size: 0.95rem;
            position: relative;
            transition: color 0.3s ease;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            transition: width 0.3s ease;
        }

        .nav-links a:hover {
            color: #00d4ff;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
            width: 100%;
        }

        .nav-links a.active {
            color: #00d4ff;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 6px;
            padding: 5px;
            z-index: 1001;
        }

        .hamburger span {
            width: 28px;
            height: 3px;
            background: #00d4ff;
            border-radius: 2px;
            transition: all 0.3s ease;
            transform-origin: center;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
            transform: scaleX(0);
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        /* ===== HERO SECTION ===== */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
            padding: 120px 50px 80px;
        }

        .hero-container {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1200px;
            width: 100%;
            gap: 80px;
        }

        .hero-text {
            flex: 1;
            max-width: 600px;
        }

        .hero-text .greeting {
            font-size: 1.1rem;
            color: #00d4ff;
            font-weight: 600;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 15px;
            animation: slideInLeft 0.8s ease forwards;
            opacity: 0;
        }

        .hero-text h1 {
            font-size: 3.5rem;
            font-weight: 900;
            line-height: 1.15;
            margin-bottom: 10px;
            animation: slideInLeft 0.8s ease 0.2s forwards;
            opacity: 0;
        }

        .hero-text h1 .highlight {
            background: linear-gradient(135deg, #00d4ff, #7b2ff7, #ff2d95);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-text .tagline {
            font-size: 1.3rem;
            color: #888;
            margin-bottom: 25px;
            animation: slideInLeft 0.8s ease 0.4s forwards;
            opacity: 0;
        }

        .typed-text {
            font-size: 1.2rem;
            color: #00d4ff;
            margin-bottom: 35px;
            min-height: 35px;
            animation: slideInLeft 0.8s ease 0.5s forwards;
            opacity: 0;
        }

        .typed-text .cursor {
            display: inline-block;
            width: 3px;
            height: 1.2em;
            background: #00d4ff;
            margin-left: 2px;
            vertical-align: text-bottom;
            animation: blink 0.7s infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .hero-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            animation: slideInLeft 0.8s ease 0.6s forwards;
            opacity: 0;
        }

        .btn {
            padding: 14px 35px;
            border-radius: 50px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            color: #fff;
            border: none;
        }

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
            left: 100%;
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4);
        }

        .btn-outline {
            background: transparent;
            color: #00d4ff;
            border: 2px solid #00d4ff;
        }

        .btn-outline:hover {
            background: rgba(0, 212, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
        }

        /* Hero Image - FİXED SİMMETRİK */
        .hero-image {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: slideInRight 0.8s ease 0.3s forwards;
            opacity: 0;
        }

        .profile-pic-wrapper {
            position: relative;
            width: 320px;
            height: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .profile-pic-border {
            position: absolute;
            inset: -8px;
            border-radius: 50%;
            background: conic-gradient(#00d4ff, #7b2ff7, #ff2d95, #00d4ff);
            animation: rotateBorder 4s linear infinite;
        }

        .profile-pic-border-outer {
            position: absolute;
            inset: -22px;
            border-radius: 50%;
            background: conic-gradient(transparent 60%, rgba(0, 212, 255, 0.15));
            animation: rotateBorder 6s linear infinite reverse;
        }

        @keyframes rotateBorder {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .profile-pic {
            position: relative;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid #0a0a0a;
            z-index: 2;
            transition: transform 0.5s ease;
        }

        .profile-pic:hover {
            transform: scale(1.05);
        }

        /* ===== SECTION STYLES ===== */
        section {
            padding: 100px 50px;
            position: relative;
            z-index: 1;
        }

        .section-header {
            text-align: center;
            margin-bottom: 70px;
        }

        .section-header h2 {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
        }

        .section-header h2 .highlight {
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-header p {
            color: #888;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .section-line {
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            margin: 15px auto 20px;
            border-radius: 2px;
        }

        /* ===== ABOUT SECTION ===== */
        .about {
            background: linear-gradient(180deg, transparent, rgba(0, 212, 255, 0.02), transparent);
        }

        .about-container {
            display: flex;
            align-items: center;
            gap: 80px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .about-image {
            flex: 0 0 350px;
        }

        .about-img-box {
            position: relative;
            width: 350px;
            height: 400px;
            border-radius: 20px;
            overflow: hidden;
            transition: transform 0.5s ease;
        }

        .about-img-box:hover {
            transform: translateY(-10px);
        }

        .about-img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .about-img-overlay {
            position: absolute;
            inset: 0;
            border-radius: 20px;
            border: 3px solid transparent;
            background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                        linear-gradient(135deg, #00d4ff, #7b2ff7) border-box;
            pointer-events: none;
        }

        .about-img-glow {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 40px;
            background: radial-gradient(ellipse, rgba(0, 212, 255, 0.3), transparent);
            filter: blur(15px);
        }

        .about-content {
            flex: 1;
        }

        .about-content h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: #00d4ff;
        }

        .about-content p {
            color: #bbb;
            line-height: 1.8;
            margin-bottom: 15px;
            font-size: 1rem;
        }

        .about-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 30px;
        }

        .stat-item {
            text-align: center;
            padding: 25px 15px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 212, 255, 0.1);
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .stat-item:hover {
            transform: translateY(-5px);
            border-color: rgba(0, 212, 255, 0.4);
            background: rgba(0, 212, 255, 0.05);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
        }

        .stat-number {
            font-size: 2.2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-label {
            font-size: 0.85rem;
            color: #888;
            margin-top: 5px;
        }

        /* ===== SKILLS SECTION ===== */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 25px;
            max-width: 900px;
            margin: 0 auto;
        }

        .skill-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 212, 255, 0.08);
            border-radius: 15px;
            padding: 30px 15px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: default;
        }

        .skill-card:hover {
            transform: translateY(-10px) scale(1.05);
            border-color: rgba(0, 212, 255, 0.5);
            background: rgba(0, 212, 255, 0.08);
            box-shadow: 0 20px 50px rgba(0, 212, 255, 0.15);
        }

        .skill-card i {
            font-size: 2.5rem;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: transform 0.3s ease;
            display: block;
        }

        .skill-card:hover i {
            transform: scale(1.2) rotate(5deg);
        }

        .skill-card span {
            display: block;
            font-size: 0.85rem;
            color: #aaa;
            font-weight: 500;
        }

        /* ===== SERVICES SECTION ===== */
        .services {
            background: linear-gradient(180deg, transparent, rgba(123, 47, 247, 0.02), transparent);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .service-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 20px;
            padding: 45px 35px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            will-change: transform;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #00d4ff, #7b2ff7, #ff2d95);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
        }

        .service-card:hover::before {
            transform: scaleX(1);
        }

        .service-card:hover {
            transform: translateY(-10px);
            border-color: rgba(0, 212, 255, 0.3);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }

        .service-icon {
            width: 70px;
            height: 70px;
            border-radius: 15px;
            background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(123, 47, 247, 0.15));
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
            transform: scale(1.1) rotate(-5deg);
            background: linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(123, 47, 247, 0.25));
        }

        .service-icon i {
            font-size: 1.8rem;
            color: #00d4ff;
        }

        .service-card h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #fff;
        }

        .service-card p {
            color: #888;
            line-height: 1.7;
            font-size: 0.95rem;
        }

        /* ===== CONTACT SECTION ===== */
        .contact-container {
            max-width: 700px;
            margin: 0 auto;
        }

        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin-bottom: 50px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px 25px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 212, 255, 0.08);
            border-radius: 15px;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
        }

        .contact-item:hover {
            transform: translateY(-5px);
            border-color: rgba(0, 212, 255, 0.3);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
        }

        .contact-item i {
            font-size: 1.5rem;
            color: #00d4ff;
            flex-shrink: 0;
        }

        .contact-item div span {
            display: block;
            font-size: 0.8rem;
            color: #666;
        }

        .contact-item div p {
            font-size: 0.95rem;
            color: #ddd;
            margin: 0;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            position: relative;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 16px 20px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: #00d4ff;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);
        }

        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #555;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .btn-submit {
            width: 100%;
            padding: 16px 35px;
            border-radius: 50px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            color: #fff;
            border: none;
            font-family: 'Poppins', sans-serif;
        }

        .btn-submit:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4);
        }

        .btn-submit.success {
            background: linear-gradient(135deg, #00c851, #007e33);
        }

        /* ===== SOCIAL LINKS ===== */
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            animation: slideInLeft 0.8s ease 0.8s forwards;
            opacity: 0;
        }

        .social-link {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid rgba(0, 212, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00d4ff;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .social-link:hover {
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            border-color: transparent;
            color: #fff;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        /* ===== FOOTER ===== */
        footer {
            position: relative;
            z-index: 1;
            padding: 50px 50px 30px;
            border-top: 1px solid rgba(0, 212, 255, 0.1);
            background: rgba(5, 5, 5, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-logo {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .footer-links {
            display: flex;
            gap: 25px;
            list-style: none;
        }

        .footer-links a {
            color: #888;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: #00d4ff;
        }

        .footer-social {
            display: flex;
            gap: 12px;
        }

        .footer-social a {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(0, 212, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #888;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .footer-social a:hover {
            color: #00d4ff;
            border-color: #00d4ff;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);
        }

        .footer-bottom {
            text-align: center;
            margin-top: 35px;
            padding-top: 25px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-bottom p {
            color: #555;
            font-size: 0.85rem;
            margin-bottom: 10px;
        }

        .footer-bottom .heart {
            color: #ff2d95;
            animation: heartBeat 1.5s ease infinite;
            display: inline-block;
        }

        @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }

        .copyright-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(0, 212, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.1);
            padding: 10px 24px;
            border-radius: 50px;
            font-size: 0.8rem;
            color: #666;
            transition: all 0.3s ease;
        }

        .copyright-badge:hover {
            border-color: rgba(0, 212, 255, 0.3);
            background: rgba(0, 212, 255, 0.08);
        }

        .copyright-badge i {
            color: #00d4ff;
            animation: shieldPulse 2s ease infinite;
        }

        @keyframes shieldPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        /* ===== SCROLL TO TOP ===== */
        .scroll-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00d4ff, #7b2ff7);
            color: #fff;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
        }

        .scroll-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .scroll-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.5);
        }

        /* ===== ANIMATIONS ===== */
        @keyframes slideInLeft {
            from {
                transform: translateX(-60px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideInRight {
            from {
                transform: translateX(60px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .animate-on-scroll {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
            .hero {
                padding: 120px 30px 80px;
            }

            .hero-container {
                flex-direction: column-reverse;
                text-align: center;
                gap: 50px;
            }

            .hero-text {
                max-width: 100%;
            }

            .hero-text h1 {
                font-size: 2.5rem;
            }

            .hero-buttons {
                justify-content: center;
            }

            .social-links {
                justify-content: center;
            }

            .about-container {
                flex-direction: column;
                text-align: center;
                gap: 50px;
            }

            .about-image {
                flex: 0 0 auto;
            }

            .about-img-box {
                width: 300px;
                height: 350px;
                margin: 0 auto;
            }

            .profile-pic-wrapper {
                width: 260px;
                height: 260px;
            }

            .profile-pic {
                width: 260px;
                height: 260px;
            }
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 15px 25px;
            }

            .navbar.scrolled {
                padding: 10px 25px;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(10, 10, 10, 0.98);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 25px 30px;
                gap: 18px;
                border-bottom: 1px solid rgba(0, 212, 255, 0.1);
                animation: none;
            }

            .nav-links.active {
                display: flex;
                animation: fadeInDown 0.3s ease;
            }

            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .hamburger {
                display: flex;
            }

            section {
                padding: 70px 20px;
            }

            .hero {
                padding: 100px 20px 60px;
            }

            .hero-text h1 {
                font-size: 2rem;
            }

            .section-header h2 {
                font-size: 2rem;
            }

            .about-stats {
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .footer-content {
                flex-direction: column;
                text-align: center;
            }

            .footer-links {
                flex-wrap: wrap;
                justify-content: center;
            }

            footer {
                padding: 40px 25px 25px;
            }
        }

        @media (max-width: 480px) {
            .hero-text h1 {
                font-size: 1.7rem;
            }

            .hero-text .tagline {
                font-size: 1rem;
            }

            .stat-number {
                font-size: 1.5rem;
            }

            .profile-pic-wrapper {
                width: 200px;
                height: 200px;
            }

            .profile-pic {
                width: 200px;
                height: 200px;
            }

            .about-img-box {
                width: 250px;
                height: 300px;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 250px;
            }
        }
    </style>
</head>
<body>

    <!-- Preloader -->
    <div class="preloader" id="preloader">
        <div class="preloader-spinner"></div>
    </div>

    <!-- Animated Particles Background -->
    <div class="particles" id="particles"></div>

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <div class="nav-logo" onclick="scrollToTop()">ƏM</div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#hero">Ana Səhifə</a></li>
            <li><a href="#about">Haqqımda</a></li>
            <li><a href="#skills">Bacarıqlar</a></li>
            <li><a href="#services">Xidmətlər</a></li>
            <li><a href="#contact">Əlaqə</a></li>
        </ul>
        <div class="hamburger" id="hamburger" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-container">
            <div class="hero-text">
                <p class="greeting">👋 Salam, mən</p>
                <h1>Əkbər <span class="highlight">Mahmudov</span></h1>
                <p class="tagline">Proqramçı &amp; Rəqəmsal Həllər Mütəxəssisi</p>
                <div class="typed-text">
                    <span id="typed-output"></span><span class="cursor"></span>
                </div>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">
                        <i class="fas fa-paper-plane"></i> Əlaqə Saxla
                    </a>
                    <a href="#about" class="btn btn-outline">
                        <i class="fas fa-user"></i> Daha Çox
                    </a>
                </div>
                <div class="social-links">
                    <a href="https://github.com/ekbermahmudow" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="social-link" title="LinkedIn" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="social-link" title="Instagram" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="social-link" title="Telegram" aria-label="Telegram">
                        <i class="fab fa-telegram-plane"></i>
                    </a>
                </div>
            </div>
            <div class="hero-image">
                <div class="profile-pic-wrapper">
                    <div class="profile-pic-border-outer"></div>
                    <div class="profile-pic-border"></div>
                    <img src="https://avatars.githubusercontent.com/u/261281142?v=4" alt="Əkbər Mahmudov" class="profile-pic" loading="eager">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="section-header animate-on-scroll">
            <h2>Mənim <span class="highlight">Haqqımda</span></h2>
            <div class="section-line"></div>
            <p>Texnologiya ilə gözəlliyi birləşdirən rəqəmsal dünya yaradıcısı</p>
        </div>
        <div class="about-container">
            <div class="about-image animate-on-scroll">
                <div class="about-img-box">
                    <img src="https://avatars.githubusercontent.com/u/261281142?v=4" alt="Əkbər Mahmudov" loading="lazy">
                    <div class="about-img-overlay"></div>
                    <div class="about-img-glow"></div>
                </div>
            </div>
            <div class="about-content animate-on-scroll">
                <h3>Əkbər Mahmudov</h3>
                <p>
                    Mən texnologiyaya həvəsli, yaradıcı və daim inkişaf edən bir proqramçıyam.
                    Müasir veb texnologiyalar, proqramlaşdırma dilləri və rəqəmsal həllər sahəsində
                    dərin biliklərə sahibəm.
                </p>
                <p>
                    Hər bir layihəyə unikal yanaşma ilə yanaşır, keyfiyyətli və istifadəçi dostu
                    məhsullar yaratmağa çalışıram. Komanda işinə böyük dəyər verir, yeni
                    texnologiyaları öyrənməkdən həzz alıram.
                </p>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number" data-count="50">0+</div>
                        <div class="stat-label">Layihə</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-count="30">0+</div>
                        <div class="stat-label">Müştəri</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-count="3">0+</div>
                        <div class="stat-label">İl Təcrübə</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="skills" id="skills">
        <div class="section-header animate-on-scroll">
            <h2>Mənim <span class="highlight">Bacarıqlarım</span></h2>
            <div class="section-line"></div>
            <p>İstifadə etdiyim texnologiyalar və alətlər</p>
        </div>
        <div class="skills-grid">
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-html5"></i>
                <span>HTML5</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-css3-alt"></i>
                <span>CSS3</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-js-square"></i>
                <span>JavaScript</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-react"></i>
                <span>React</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-python"></i>
                <span>Python</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-node-js"></i>
                <span>Node.js</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-git-alt"></i>
                <span>Git</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fas fa-database"></i>
                <span>Database</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-figma"></i>
                <span>Figma</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-linux"></i>
                <span>Linux</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fab fa-docker"></i>
                <span>Docker</span>
            </div>
            <div class="skill-card animate-on-scroll">
                <i class="fas fa-mobile-alt"></i>
                <span>Responsive</span>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="section-header animate-on-scroll">
            <h2>Mənim <span class="highlight">Xidmətlərim</span></h2>
            <div class="section-line"></div>
            <p>Peşəkar həllər təqdim edirəm</p>
        </div>
        <div class="services-grid">
            <div class="service-card animate-on-scroll">
                <div class="service-icon">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <h3>Veb Sayt Hazırlanması</h3>
                <p>Müasir, responsiv və istifadəçi dostu veb saytlar hazırlayıram. HTML, CSS, JavaScript və React ilə sürətli və gözəl saytlar yaradıram.</p>
            </div>
            <div class="service-card animate-on-scroll">
                <div class="service-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobil Tətbiq İnkişafı</h3>
                <p>Android və iOS platformaları üçün mobil tətbiqlər hazırlayıram. İstifadəçi təcrübəsinə fokuslanmış, yüksək performanslı tətbiqlər yaradıram.</p>
            </div>
            <div class="service-card animate-on-scroll">
                <div class="service-icon">
                    <i class="fas fa-palette"></i>
                </div>
                <h3>UI/UX Dizayn</h3>
                <p>İstifadəçi interfeysinin dizaynını və istifadəçi təcrübəsini optimallaşdırıram. Figma ilə müasir və cəlbedici dizaynlar yaradıram.</p>
            </div>
            <div class="service-card animate-on-scroll">
                <div class="service-icon">
                    <i class="fas fa-server"></i>
                </div>
                <h3>Backend İnkişaf</h3>
                <p>Güclü və təhlükəsiz server tərəfi həllər hazırlayıram. API inkişafı, verilənlər bazası idarəetməsi və bulud xidmətləri ilə işləyirəm.</p>
            </div>
            <div class="service-card animate-on-scroll">
                <div class="service-icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3>SEO Optimallaşdırma</h3>
                <p>Saytınızın axtarış motorlarında üst sıralarda yer alması üçün SEO strategiyaları hazırlayır və tətbiq edirəm.</p>
            </div>
            <div class="service-card animate-on-scroll">
                <div class="service-icon">
                    <i class="fas fa-headset"></i>
                </div>
                <h3>Texniki Dəstək</h3>
                <p>Layihələriniz üçün davamlı texniki dəstək və təmir xidmətləri təqdim edirəm. 7/24 əlçatan və etibarlı dəstək.</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="section-header animate-on-scroll">
            <h2>Mənimlə <span class="highlight">Əlaqə</span></h2>
            <div class="section-line"></div>
            <p>Layihəniz üçün birlikdə işləyək</p>
        </div>
        <div class="contact-container">
            <div class="contact-info animate-on-scroll">
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <span>Ünvan</span>
                        <p>Azərbaycan, Bakı</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <span>E-poçt</span>
                        <p>info@ekber.dev</p>
                    </div>
                </div>
                <a href="https://github.com/ekbermahmudow" target="_blank" rel="noopener noreferrer" class="contact-item">
                    <i class="fab fa-github"></i>
                    <div>
                        <span>GitHub</span>
                        <p>@ekbermahmudow</p>
                    </div>
                </a>
            </div>
            <form class="contact-form animate-on-scroll" id="contactForm">
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" placeholder="Adınız" required autocomplete="name">
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="E-poçtunuz" required autocomplete="email">
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Mövzu">
                </div>
                <div class="form-group">
                    <textarea placeholder="Mesajınız..." required></textarea>
                </div>
                <button type="submit" class="btn-submit" id="submitBtn">
                    <i class="fas fa-paper-plane"></i> Mesaj Göndər
                </button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-logo">Əkbər Mahmudov</div>
            <ul class="footer-links">
                <li><a href="#hero">Ana Səhifə</a></li>
                <li><a href="#about">Haqqımda</a></li>
                <li><a href="#services">Xidmətlər</a></li>
                <li><a href="#contact">Əlaqə</a></li>
            </ul>
            <div class="footer-social">
                <a href="https://github.com/ekbermahmudow" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p><span class="heart">❤️</span> ilə hazırlanıb | Əkbər Mahmudov</p>
            <div class="copyright-badge">
                <i class="fas fa-shield-alt"></i>
                © 2024–2026 Əkbər Mahmudov. Bütün hüquqlar qorunur.
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" id="scrollTop" onclick="scrollToTop()" aria-label="Yuxarı qayıt">
        <i class="fas fa-chevron-up"></i>
    </button>

    <script>
        // ===== PRELOADER =====
        window.addEventListener('load', function() {
            var preloader = document.getElementById('preloader');
            preloader.classList.add('hidden');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        });

        // ===== PARTICLES BACKGROUND =====
        (function createParticles() {
            var container = document.getElementById('particles');
            if (!container) return;
            var particleCount = 50;
            var colors = [
                'rgba(0, 212, 255, 0.4)',
                'rgba(123, 47, 247, 0.4)',
                'rgba(255, 45, 149, 0.3)'
            ];

            for (var i = 0; i < particleCount; i++) {
                var particle = document.createElement('div');
                particle.className = 'particle';
                var size = (Math.random() * 4 + 2) + 'px';
                particle.style.left = (Math.random() * 100) + '%';
                particle.style.width = size;
                particle.style.height = size;
                particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
                particle.style.animationDelay = (Math.random() * 10) + 's';
                particle.style.opacity = String(Math.random() * 0.5 + 0.1);
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(particle);
            }
        })();

        // ===== TYPING EFFECT =====
        (function initTyping() {
            var phrases = [
                'Veb Developer 💻',
                'Proqramçı 🚀',
                'UI/UX Dizayner 🎨',
                'Texnologiya Həvəskarı ⚡',
                'Problem Həll Edən 🧩'
            ];
            var phraseIndex = 0;
            var charIndex = 0;
            var isDeleting = false;
            var typedOutput = document.getElementById('typed-output');

            if (!typedOutput) return;

            function type() {
                var currentPhrase = phrases[phraseIndex];
                var typeSpeed;

                if (isDeleting) {
                    charIndex--;
                    typedOutput.textContent = currentPhrase.substring(0, charIndex);
                    typeSpeed = 40;
                } else {
                    charIndex++;
                    typedOutput.textContent = currentPhrase.substring(0, charIndex);
                    typeSpeed = 100;
                }

                if (!isDeleting && charIndex === currentPhrase.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typeSpeed = 400;
                }

                setTimeout(type, typeSpeed);
            }

            type();
        })();

        // ===== NAVBAR SCROLL EFFECT =====
        var navbar = document.getElementById('navbar');
        var scrollTopBtn = document.getElementById('scrollTop');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        // ===== HAMBURGER MENU =====
        var hamburger = document.getElementById('hamburger');
        var navLinks = document.getElementById('navLinks');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        }

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // ===== SCROLL TO TOP =====
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ===== SCROLL ANIMATIONS =====
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        };

        var scrollObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    scrollOb
