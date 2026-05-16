import fs from 'fs';
import path from 'path';

/**
 * Script de validación de diccionarios i18n.
 * Compara las llaves entre el archivo base (es.json) y el archivo objetivo (en.json).
 */

const LOCALES_DIR = path.join(process.cwd(), 'src/resources/locales');
const BASE_LOCALE = 'es.json';
const TARGET_LOCALE = 'en.json';

function getKeys(obj: any, prefix = ''): string[] {
  return Object.keys(obj).reduce((res: string[], el) => {
    if (Array.isArray(obj[el])) {
      return res.concat(`${prefix}${el}`);
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return res.concat(getKeys(obj[el], `${prefix}${el}.`));
    }
    return res.concat(`${prefix}${el}`);
  }, []);
}

function validate() {
  console.log('🔍 Validando consistencia de i18n...');

  const baseContent = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, BASE_LOCALE), 'utf-8'));
  const targetContent = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, TARGET_LOCALE), 'utf-8'));

  const baseKeys = getKeys(baseContent);
  const targetKeys = getKeys(targetContent);

  const missingInTarget = baseKeys.filter(key => !targetKeys.includes(key));
  const missingInBase = targetKeys.filter(key => !baseKeys.includes(key));

  if (missingInTarget.length === 0 && missingInBase.length === 0) {
    console.log('✅ ¡Diccionarios sincronizados!');
  } else {
    if (missingInTarget.length > 0) {
      console.error(`❌ Faltan llaves en ${TARGET_LOCALE}:`);
      missingInTarget.forEach(key => console.error(`  - ${key}`));
    }
    if (missingInBase.length > 0) {
      console.error(`⚠️ Llaves extra en ${TARGET_LOCALE} (no existen en ${BASE_LOCALE}):`);
      missingInBase.forEach(key => console.error(`  - ${key}`));
    }
    process.exit(1);
  }
}

try {
  validate();
} catch (error) {
  console.error('💥 Error durante la validación:', error);
  process.exit(1);
}
