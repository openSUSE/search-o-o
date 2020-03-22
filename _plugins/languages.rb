module Jekyll
  class LanguagesBlock < Liquid::Block

    def render(context)
      result = []
      name = YAML.load_file('_data/translations.yml')
      languages = Dir["assets/js/langpack/*.json"].map {|e| File.basename(e, '.json')}
      languages.prepend('en')
      languages.each do |language|
        line = super
        lang_name = name.has_key?(language) ? name[language] : language
        line.gsub!('@@@@', lang_name)
        line.gsub!('@@', language)
        result << line
      end
      result.join()
    end
  end
end

Liquid::Template.register_tag('languages', Jekyll::LanguagesBlock)
