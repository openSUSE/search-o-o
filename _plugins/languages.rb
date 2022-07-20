class Languages
  def initialize(site)
    @site = site
  end

  def munge!
    name = YAML.load_file('_data/translations.yml')
    languages = Dir["assets/js/langpack/*.json"].map {|e| File.basename(e, '.json')}
    languages.prepend('en')
    @site.config['languages'] = []
    languages.each do |language|
      result = {}
      result['short'] = language
      result['name'] = name.has_key?(language) ? name[language] : language
      @site.config['languages'] << result
    end
  end
end

Jekyll::Hooks.register :site, :after_init do |site|
  Languages.new(site).munge!
end
