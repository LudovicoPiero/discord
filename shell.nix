{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    nodejs
    nodePackages_latest.npm
    nodePackages_latest.prettier
  ];
}
