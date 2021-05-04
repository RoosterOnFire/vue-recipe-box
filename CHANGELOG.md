# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.8.0] - 2021-05-04

### Changes

- better transitions
- vscode settings
- moved css to correct components

## [0.7.1] - 2021-04-26

### Fixed

- added meta description
- incorrect use of updateName

## [0.7.0] - 2021-04-26

### Added

- scoped style

### Changed

- better use of composition
- moved common CSS to index.css

## [0.6.0] - 2021-04-24

### Added

- ListTransition component

### Changed

- Replaced button with text with icons

## [0.5.0] - 2021-04-24

### Changed

- replaced recipe edit in modal with edit inline

## [0.4.2] - 2021-04-24

### Fixed

- incorrect dates in CHANGELOG
- new ingredient/direction is not added when 'Add ingredient/direction' is clicked

## [0.4.1] - 2021-04-24

### Fixed

- recipe name not update if changed in recipe edit

## [0.4.0] - 2021-04-24

### Added

- style settings for vscode

### Change

- reorg of RecipeEdit, RecipeView (child components)
- naming base on Vue style guide
- correct types for heroicons

## [0.3.0] - 2021-04-20

### Added

- temporary heroicons types fix
- deploy command to package.json

### Changed

- moved TrashIcon to seperate component
- replaced flex with grid in RecipeEdit
- imporoved design in RecipeEdit

### Removed

- deleteRecipeRow

### Fixed

- inject type in TrashIcon

## [0.2.0] - 2021-04-18

### Added

- delete recipe directly in list
- deploy to Github Pages
- link in README to deployed application

### Fixed

- heroicons types (temporary solution)
- XIcon in RecipeEdit
- correct CHANGELOG

## [0.1.0] - 2021-04-18

### Added

- recipes management (add, edit, delete)
- added basic styling

### Changed

- updated README
