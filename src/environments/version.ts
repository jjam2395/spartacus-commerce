// Local development values — overwritten by deploy workflow
export const APP_VERSION = 'local-dev';
export const APP_BRANCH = 'local-dev';
export const APP_DATE = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
