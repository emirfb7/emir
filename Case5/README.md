# Case 5 - Webpack Bundle

Bu proje, JavaScript ve CSS dosyalarını tek bir yerde toplamak ve minimize etmek için Webpack kullanımını gösterir.

## Proje Yapısı

```
/project
└── src
    ├── index.html
    ├── style1.css
    ├── style2.css
    ├── script1.js
    ├── script2.js
    └── styles.js (CSS import dosyası)
└── dist
    ├── script.min.js (Otomatik oluşturulur)
    └── style.min.css (Otomatik oluşturulur)
└── package.json
└── webpack.config.js
```

## Özellikler

- **JavaScript Bundling**: `script1.js` ve `script2.js` dosyaları `script.min.js` olarak birleştirilir ve minimize edilir
- **CSS Bundling**: `style1.css` ve `style2.css` dosyaları `style.min.css` olarak birleştirilir ve minimize edilir
- **Minimization**: Terser plugin ile JavaScript minimize edilir, CSS Minimizer ile CSS minimize edilir
- **Console Removal**: Production build'de console.log'lar otomatik olarak kaldırılır

## Kurulum

```bash
npm install
```

## Build

```bash
npm run build
```

Bu komut çalıştırıldığında:
- `src/` altındaki tüm JS dosyaları birleştirilip minimize edilerek `dist/script.min.js` oluşturulur
- `src/` altındaki tüm CSS dosyaları birleştirilip minimize edilerek `dist/style.min.css` oluşturulur

## Geliştirme

```bash
npm run dev
```

Development modunda build yapar (minimize etmez).

## Watch Mode

```bash
npm run watch
```

Dosya değişikliklerini izler ve otomatik olarak yeniden build yapar.

## Test

`src/index.html` dosyasını tarayıcıda açarak bundled dosyaların çalıştığını test edebilirsiniz.

## Webpack Konfigürasyonu

- **Entry Points**: 
  - `script`: JavaScript dosyaları için
  - `styles`: CSS dosyaları için
- **Output**: `dist/` klasörüne minimize edilmiş dosyalar
- **Loaders**: CSS dosyalarını işlemek için `css-loader` ve `MiniCssExtractPlugin`
- **Optimization**: Terser ve CSS Minimizer ile minimize işlemi
