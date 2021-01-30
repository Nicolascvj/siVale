// ===========================================
//  Puerto
// ===========================================
process.env.PORT = process.env.PORT || 3000;

// ===========================================
//  Entorno
// ===========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

// ===========================================
//  Base de Datos
// ===========================================

let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = "mongodb+srv://cocoa-user:x8qOrxBlM4yIjsB3@cluster0.l2gsu.mongodb.net/bancos";
   
   // urlDB = "mongodb://localhost:27017/banco";
} else {
    urlDB = "mongodb+srv://cocoa-user:x8qOrxBlM4yIjsB3@cluster0.l2gsu.mongodb.net/bancos";
    //process.env.MONGO_URI;
    urlDB = "mongodb://localhost:27017/banco";
}


process.env.URLDB = urlDB;


// ===========================================
//  Vencimiento del Token
// ===========================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========================================
//  SEED de autenticación
// ===========================================
process.env.SEED = process.env.SEED || 'este-es-la-clave-en-dev';