{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  outputs = { self, nixpkgs }: let
      systems = [ "x86_64-linux" "aarch64-linux" ];
    in {
      packages = nixpkgs.lib.genAttrs systems (system: let
        pkgs = import nixpkgs { inherit system; };
      in {
        default = pkgs.buildEnv {
          name = "devcontainer-env";
          paths = with pkgs; [
            nodejs_23
            git
            bats
            pulumi
            pulumiPackages.pulumi-language-nodejs
            pnpm
            docker
            google-cloud-sdk
          ];
        };
      });
    };
}
