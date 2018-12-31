<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%vr(=2{)=x$ngLz%%fhoamTzJ]]bb+Q<UAAA32,s#>!7#ifgm9:V0`N94pA=C2e^');
define('SECURE_AUTH_KEY',  '?:O_NqM@v]BI!8b3|/m7mIqH>d[.*Pj=aKfE/|;~<II&MnM?wOuRJC6Lv<isY4az');
define('LOGGED_IN_KEY',    '/5kllMS|k2)NhMuW#ARlBxm)i!4%_~fes4y@8pF]K94edfMrDI_J,ZrCrbyT/)^T');
define('NONCE_KEY',        '7.pf_NYUH^)(~!G H#zV[4E$>i&qze#Q_D1tEi9Asx,`$E<rn k6FS*3K?NPKbB`');
define('AUTH_SALT',        '<<==u&(abQVI0l5?-qbe?Mql^,Cw>WJqT{7XM;BH%b;Dj(w}nU)l?qG<GJ:rH/On');
define('SECURE_AUTH_SALT', '[l_00N)F7Uc<T0M&nfV`X1xPMqdT-c)_!g zC+3;Lgu.}h@c9SWj@u7`$9#=N.fG');
define('LOGGED_IN_SALT',   'd1>(~vvX,;+=OA4HU=l7B]MS>HX@a5OldR7#$IeM[2UF/~Dv+S?str 98s=>yYtg');
define('NONCE_SALT',       'XkVOM;A?0:__cI4j}bbH?Y|, Y%,{gteC ~SOm;S+uOZzJ~&:`9yo5L?e9*l44ib');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
