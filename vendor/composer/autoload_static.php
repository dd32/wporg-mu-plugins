<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit_wporg_mu_plugins
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Ahc\\Jwt\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Ahc\\Jwt\\' => 
        array (
            0 => __DIR__ . '/..' . '/adhocore/jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit_wporg_mu_plugins::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit_wporg_mu_plugins::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit_wporg_mu_plugins::$classMap;

        }, null, ClassLoader::class);
    }
}