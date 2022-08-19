with (import <nixpkgs> {});
mkShell {
  buildInputs = [
    jekyll
    ruby
  ];
}
